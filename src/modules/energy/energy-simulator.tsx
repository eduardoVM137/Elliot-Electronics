"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Cpu,
  Gauge,
  LayoutGrid,
  Move,
  PanelTop,
  Trash2,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";

type OrientationId = "sur" | "sureste" | "suroeste" | "este-oeste";

type PanelTemplate = {
  id: string;
  name: string;
  watts: number;
  efficiency: number;
  area: number;
  cost: number;
};

type SolarPanel = {
  id: number;
  templateId: string;
  watts: number;
  orientation: OrientationId;
  tilt: number;
  losses: number;
};

const panelTemplates: PanelTemplate[] = [
  {
    id: "trina-550",
    name: "Trina Solar Vertex S+ 550W",
    watts: 550,
    efficiency: 21.4,
    area: 2.45,
    cost: 4050,
  },
  {
    id: "jinko-580",
    name: "Jinko Tiger Neo 580W",
    watts: 580,
    efficiency: 22.1,
    area: 2.58,
    cost: 4380,
  },
  {
    id: "canadian-610",
    name: "Canadian Solar 610W",
    watts: 610,
    efficiency: 22.6,
    area: 2.72,
    cost: 4720,
  },
];

const orientations: Record<OrientationId, { label: string; factor: number }> = {
  sur: { label: "Sur (180)", factor: 1 },
  sureste: { label: "Sureste (135)", factor: 0.94 },
  suroeste: { label: "Suroeste (225)", factor: 0.92 },
  "este-oeste": { label: "Este / Oeste", factor: 0.87 },
};

const seedPanels: SolarPanel[] = Array.from({ length: 28 }, (_, index) => ({
  id: index + 1,
  templateId: "trina-550",
  watts: 550,
  orientation: "sur",
  tilt: 15,
  losses: 9,
}));

function getPanelTemplate(id: string) {
  return panelTemplates.find((template) => template.id === id) ?? panelTemplates[0];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function buildSolarPanel(id: number, templateId: string): SolarPanel {
  const template = getPanelTemplate(templateId);

  return {
    id,
    templateId,
    watts: template.watts,
    orientation: "sur",
    tilt: 15,
    losses: 9,
  };
}

export function EnergySimulator() {
  const [monthlyBill, setMonthlyBill] = useState(12500);
  const [kwhCost, setKwhCost] = useState(2.45);
  const [systemType, setSystemType] = useState("Interconectado");
  const [selectedTemplate, setSelectedTemplate] = useState(panelTemplates[0].id);
  const [panels, setPanels] = useState<SolarPanel[]>(seedPanels);
  const [selectedPanelId, setSelectedPanelId] = useState<number | null>(1);
  const [viewMode, setViewMode] = useState<"2d" | "3d">("3d");
  const [quickModelsOpen, setQuickModelsOpen] = useState(false);

  const selectedPanel =
    panels.find((panel) => panel.id === selectedPanelId) ?? panels[0] ?? null;
  const activeTemplateId = selectedPanel?.templateId ?? selectedTemplate;
  const activeTemplateData = getPanelTemplate(activeTemplateId);

  const estimate = useMemo(() => {
    const sunHours = 5.25;
    const monthlyConsumption = monthlyBill / Math.max(kwhCost, 0.1);

    const annualProduction = panels.reduce((total, panel) => {
      const orientation = orientations[panel.orientation].factor;
      const tiltFactor = clamp(1 - Math.abs(panel.tilt - 18) * 0.004, 0.9, 1);
      const lossFactor = 1 - panel.losses / 100;
      return total + (panel.watts / 1000) * sunHours * 365 * orientation * tiltFactor * lossFactor;
    }, 0);

    const dcKw = panels.reduce((total, panel) => total + panel.watts, 0) / 1000;
    const acKw = dcKw * 0.96;
    const totalArea = panels.reduce(
      (total, panel) => total + getPanelTemplate(panel.templateId).area,
      0,
    );
    const avgLosses = panels.length
      ? panels.reduce((total, panel) => total + panel.losses, 0) / panels.length
      : 0;
    const annualConsumption = monthlyConsumption * 12;
    const usefulProduction = Math.min(annualProduction, annualConsumption * 0.95);
    const annualSavings = usefulProduction * kwhCost;
    const hardwareCost = panels.reduce(
      (total, panel) => total + getPanelTemplate(panel.templateId).cost,
      0,
    );
    const investment = panels.length ? hardwareCost + dcKw * 6400 + 68000 : 0;
    const roi = annualSavings > 0 ? investment / annualSavings : 0;
    const inverterCount = panels.length ? Math.max(1, Math.ceil(dcKw / 50)) : 0;
    const instantProduction = dcKw * 0.73 * (1 - avgLosses / 100);
    const offset = annualConsumption > 0 ? usefulProduction / annualConsumption : 0;

    return {
      acKw,
      annualProduction,
      annualSavings,
      avgLosses,
      dcKw,
      instantProduction,
      investment,
      inverterCount,
      offset,
      roi,
      totalArea,
    };
  }, [kwhCost, monthlyBill, panels]);

  const kpis = [
    {
      icon: LayoutGrid,
      label: "Paneles",
      value: panels.length.toString(),
      detail: `${estimate.totalArea.toFixed(0)} m2 requeridos`,
    },
    {
      icon: Zap,
      label: "Potencia DC",
      value: `${estimate.dcKw.toFixed(2)} kWp`,
      detail: `${estimate.acKw.toFixed(2)} kW AC estimados`,
    },
    {
      icon: Gauge,
      label: "Produccion anual",
      value: `${estimate.annualProduction.toLocaleString("es-MX", {
        maximumFractionDigits: 0,
      })} kWh`,
      detail: `${Math.round(estimate.offset * 100)}% de cobertura`,
    },
    {
      icon: Cpu,
      label: "Ahorro anual",
      value: formatCurrency(estimate.annualSavings),
      detail: `Retorno ${estimate.roi.toFixed(1)} años`,
    },
  ];

  function addPanel(templateId = activeTemplateId) {
    const nextId = panels.reduce((max, panel) => Math.max(max, panel.id), 0) + 1;
    setPanels([...panels, buildSolarPanel(nextId, templateId)]);
    setSelectedPanelId(nextId);
  }

  function addPanelRow(templateId = activeTemplateId) {
    const maxId = panels.reduce((max, panel) => Math.max(max, panel.id), 0);
    const newPanels = Array.from({ length: 8 }, (_, index) =>
      buildSolarPanel(maxId + index + 1, templateId),
    );
    setPanels([...panels, ...newPanels]);
    setSelectedPanelId(maxId + 1);
  }

  function removeSelectedPanel() {
    if (!selectedPanel) return;

    const nextPanels = panels.filter((panel) => panel.id !== selectedPanel.id);
    setPanels(nextPanels);
    setSelectedPanelId(nextPanels[0]?.id ?? null);
  }

  function updateSelectedPanel(update: Partial<SolarPanel>) {
    if (!selectedPanel) return;

    setPanels((current) =>
      current.map((panel) =>
        panel.id === selectedPanel.id ? { ...panel, ...update } : panel,
      ),
    );
  }

  function selectTemplate(templateId: string) {
    const nextTemplate = getPanelTemplate(templateId);
    setSelectedTemplate(templateId);

    if (selectedPanel) {
      updateSelectedPanel({
        templateId: nextTemplate.id,
        watts: nextTemplate.watts,
      });
    }
  }

  function handleTemplateDrag(event: React.DragEvent<HTMLButtonElement>, templateId: string) {
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("template-id", templateId);
  }

  function handlePanelDrag(event: React.DragEvent<HTMLButtonElement>, panelId: number) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("panel-id", String(panelId));
  }

  function handleCanvasDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const templateId = event.dataTransfer.getData("template-id");

    if (templateId) {
      addPanel(templateId);
    }
  }

  function handlePanelDrop(event: React.DragEvent<HTMLButtonElement>, targetId: number) {
    event.preventDefault();
    event.stopPropagation();

    const sourceId = Number(event.dataTransfer.getData("panel-id"));
    const templateId = event.dataTransfer.getData("template-id");

    if (templateId) {
      addPanel(templateId);
      return;
    }

    if (!sourceId || sourceId === targetId) return;

    setPanels((current) => {
      const sourceIndex = current.findIndex((panel) => panel.id === sourceId);
      const targetIndex = current.findIndex((panel) => panel.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return current;

      const nextPanels = [...current];
      const [moved] = nextPanels.splice(sourceIndex, 1);
      nextPanels.splice(targetIndex, 0, moved);
      return nextPanels;
    });
  }

  return (
    <section className="section-pad bg-background text-foreground dark:bg-eliot-ink dark:text-white">
      <div className="container">
        <div className="mb-6 flex flex-col gap-3 md:gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-eliot-cyan">
              Simula tu sistema solar
            </p>
            <h2 className="mt-2 text-balance text-2xl font-semibold text-foreground dark:text-white md:text-4xl">
              Disena el arreglo y mira el impacto al instante.
            </h2>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-muted-foreground dark:text-white/[0.68] md:text-sm">
              Arrastra paneles al campo, selecciona uno y ajusta su modelo,
              orientacion, inclinacion y perdidas desde el mismo bloque.
            </p>
          </div>

          <div className="rounded-full border border-eliot-cyan/[0.28] bg-eliot-cyan/[0.08] px-3 py-1 w-fit text-xs font-semibold text-eliot-cyan">
            {panels.length} paneles activos
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="on-dark rounded-lg border border-white/[0.12] bg-[#07111c]/95 p-3 text-white shadow-panel overflow-y-auto max-h-[calc(100vh-400px)]">
            <div className="border-b border-white/[0.1] pb-3">
              <p className="text-[11px] font-black uppercase text-white">
                1. Datos de consumo
              </p>
              <div className="mt-3 grid gap-2">
                <label className="grid gap-1 text-[11px] text-white/[0.62]">
                  Consumo mensual
                  <div className="flex overflow-hidden rounded-md border border-white/[0.12] bg-white/[0.04]">
                    <input
                      type="number"
                      value={monthlyBill}
                      min={1000}
                      onChange={(event) => setMonthlyBill(Number(event.target.value))}
                      className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-xs font-semibold text-white outline-none"
                    />
                    <span className="border-l border-white/[0.1] px-2 py-1.5 text-[10px] font-bold text-eliot-cyan">
                      MXN
                    </span>
                  </div>
                </label>

                <label className="grid gap-1 text-[11px] text-white/[0.62]">
                  Costo por kWh
                  <div className="flex overflow-hidden rounded-md border border-white/[0.12] bg-white/[0.04]">
                    <input
                      type="number"
                      value={kwhCost}
                      min={0.5}
                      step={0.05}
                      onChange={(event) => setKwhCost(Number(event.target.value))}
                      className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-xs font-semibold text-white outline-none"
                    />
                    <span className="border-l border-white/[0.1] px-2 py-1.5 text-[10px] font-bold text-white/[0.72]">
                      kWh
                    </span>
                  </div>
                </label>

                <label className="grid gap-1 text-[11px] text-white/[0.62]">
                  Tipo de sistema
                  <select
                    value={systemType}
                    onChange={(event) => setSystemType(event.target.value)}
                    className="rounded-md border border-white/[0.12] bg-[#0c1928] px-2 py-1.5 text-xs font-semibold text-white outline-none"
                  >
                    <option>Interconectado</option>
                    <option>Hibrido</option>
                    <option>Aislado</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="pt-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[11px] font-black uppercase text-white">
                    2. Configura el arreglo
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/[0.58]">
                    El panel seleccionado controla el modelo y los nuevos
                    modulos que agregues.
                  </p>
                </div>
                <LayoutGrid className="mt-0.5 h-3.5 w-3.5 shrink-0 text-eliot-cyan" />
              </div>

              {selectedPanel ? (
                <div className="mt-2 rounded-md border border-eliot-cyan/[0.22] bg-eliot-cyan/[0.055] p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-eliot-cyan/[0.28] bg-eliot-cyan/[0.1] text-eliot-cyan">
                        <PanelTop className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-white">
                          Panel #{selectedPanel.id}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/[0.58]">
                          {getPanelTemplate(selectedPanel.templateId).watts}W
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeSelectedPanel}
                      className="rounded-md border border-white/[0.12] p-1.5 text-white/[0.72] transition hover:border-red-400/40 hover:text-red-300"
                      aria-label="Eliminar panel seleccionado"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                    <Button
                      type="button"
                      onClick={() => addPanel(selectedPanel.templateId)}
                      className="h-8 text-xs"
                    >
                      Agregar panel
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addPanelRow(selectedPanel.templateId)}
                      className="h-8 text-xs"
                    >
                      Agregar fila
                    </Button>
                  </div>

                  <div className="mt-2 border-t border-white/[0.1] pt-2">
                    <div>
                      <p className="text-xs font-semibold text-white">
                        Ajustes del modulo
                      </p>
                      <p className="mt-0.5 text-[10px] text-white/[0.58]">
                        Cambia este panel y usa sus valores para nuevos.
                      </p>
                    </div>

                    <div className="mt-2 grid gap-2">
                    <label className="grid gap-1 text-[11px] text-white/[0.62]">
                      Modelo
                      <select
                        value={selectedPanel.templateId}
                        onChange={(event) => {
                          const nextTemplate = getPanelTemplate(event.target.value);
                          setSelectedTemplate(nextTemplate.id);
                          updateSelectedPanel({
                            templateId: nextTemplate.id,
                            watts: nextTemplate.watts,
                          });
                        }}
                        className="rounded-md border border-white/[0.12] bg-[#0c1928] px-2 py-1 text-xs font-semibold text-white outline-none"
                      >
                        {panelTemplates.map((template) => (
                          <option key={template.id} value={template.id}>
                            {template.name}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-1 text-[11px] text-white/[0.62]">
                      Orientacion
                      <select
                        value={selectedPanel.orientation}
                        onChange={(event) =>
                          updateSelectedPanel({
                            orientation: event.target.value as OrientationId,
                          })
                        }
                        className="rounded-md border border-white/[0.12] bg-[#0c1928] px-2 py-1 text-xs font-semibold text-white outline-none"
                      >
                        {Object.entries(orientations).map(([id, orientation]) => (
                          <option key={id} value={id}>
                            {orientation.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-1 text-[11px] text-white/[0.62]">
                      Inclinacion: {selectedPanel.tilt}°
                      <input
                        type="range"
                        min={5}
                        max={30}
                        value={selectedPanel.tilt}
                        onChange={(event) =>
                          updateSelectedPanel({ tilt: Number(event.target.value) })
                        }
                        className="w-full accent-eliot-electric"
                      />
                    </label>

                    <label className="grid gap-1 text-[11px] text-white/[0.62]">
                      Perdidas: {selectedPanel.losses}%
                      <input
                        type="range"
                        min={4}
                        max={18}
                        value={selectedPanel.losses}
                        onChange={(event) =>
                          updateSelectedPanel({ losses: Number(event.target.value) })
                        }
                        className="w-full accent-eliot-electric"
                      />
                    </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-2 rounded-md border border-dashed border-eliot-cyan/[0.32] bg-eliot-cyan/[0.06] p-2.5">
                  <p className="text-xs font-semibold text-white">
                    No hay panel seleccionado
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/[0.62]">
                    Agrega un panel base para iniciar el arreglo.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    <Button type="button" onClick={() => addPanel()} className="h-8 text-xs">
                      Agregar panel
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => addPanelRow()}
                      className="h-8 text-xs"
                    >
                      Agregar fila
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-2 overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.025]">
                <button
                  type="button"
                  onClick={() => setQuickModelsOpen((isOpen) => !isOpen)}
                  aria-expanded={quickModelsOpen}
                  className="flex w-full items-center justify-between gap-2 p-2 text-left transition hover:bg-white/[0.035]"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.72]">
                      Modelos rapidos
                    </p>
                    <p className="mt-0.5 text-[9px] leading-4 text-white/[0.5]">
                      Opcional: toca un icono o arrastralo al campo.
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 shrink-0">
                    <span className="rounded-full border border-white/[0.1] px-1.5 py-0.5 text-[9px] font-bold uppercase text-white/[0.48]">
                      Opt
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 text-eliot-cyan transition-transform",
                        quickModelsOpen && "rotate-180",
                      )}
                    />
                  </span>
                </button>

                {quickModelsOpen ? (
                  <div className="grid grid-cols-3 gap-1.5 border-t border-white/[0.08] p-2">
                    {panelTemplates.map((template) => (
                      <button
                        key={template.id}
                        type="button"
                        draggable
                        onClick={() => selectTemplate(template.id)}
                        onDragStart={(event) => handleTemplateDrag(event, template.id)}
                        className={cn(
                          "group rounded-md border p-1.5 text-center transition active:cursor-grabbing",
                          activeTemplateId === template.id
                            ? "border-eliot-cyan/[0.55] bg-eliot-cyan/[0.09]"
                            : "border-white/[0.1] bg-white/[0.03] hover:border-eliot-cyan/[0.35]",
                        )}
                        title={template.name}
                      >
                        <span className="mx-auto flex h-7 w-10 items-center justify-center rounded border border-blue-300/[0.28] bg-[#09215e] text-eliot-cyan shadow-[0_0_16px_rgba(33,167,255,0.12)]">
                          <PanelTop className="h-3 w-3" />
                        </span>
                        <span className="mt-1 block truncate text-[9px] font-semibold text-white">
                          {template.name.split(" ")[0]}
                        </span>
                        <span className="text-[9px] font-black text-eliot-cyan">
                          {template.watts}W
                        </span>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </aside>

          <div className="on-dark overflow-hidden rounded-lg border border-white/[0.12] bg-[#07111c] text-white shadow-panel">
            <div className="flex flex-col gap-2 border-b border-white/[0.1] p-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase text-white">
                  Vista previa del sistema
                </p>
                <p className="mt-0.5 text-[10px] text-white/[0.58]">
                  Campo fotovoltaico, bus DC e inversor.
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setViewMode("2d")}
                  className={cn(
                    "rounded-md border px-2 py-1 text-[10px] font-bold transition",
                    viewMode === "2d"
                      ? "border-eliot-cyan/[0.45] bg-eliot-cyan/[0.12] text-eliot-cyan"
                      : "border-white/[0.1] text-white/[0.68]",
                  )}
                >
                  2D
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("3d")}
                  className={cn(
                    "rounded-md border px-2 py-1 text-[10px] font-bold transition",
                    viewMode === "3d"
                      ? "border-eliot-cyan/[0.45] bg-eliot-cyan/[0.12] text-eliot-cyan"
                      : "border-white/[0.1] text-white/[0.68]",
                  )}
                >
                  3D
                </button>
              </div>
            </div>

            <div
              className="relative min-h-[420px] overflow-hidden bg-[#081321]"
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleCanvasDrop}
            >
              <div className="absolute inset-0 bg-technical-grid opacity-55" />
              <div className="absolute inset-x-3 top-3 z-10 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div className="rounded-md border border-eliot-cyan/[0.22] bg-eliot-ink/[0.72] px-3 py-2 backdrop-blur-xl">
                  <p className="text-[10px] text-white/[0.58]">
                    Produccion instantanea
                  </p>
                  <p className="mt-0.5 text-2xl font-black text-eliot-cyan">
                    {estimate.instantProduction.toFixed(2)} kW
                  </p>
                </div>
                <div className="rounded-md border border-white/[0.1] bg-eliot-ink/[0.6] px-3 py-2 text-right backdrop-blur-xl">
                  <p className="text-[10px] text-white/[0.58]">Sistema</p>
                  <p className="mt-0.5 text-xs font-semibold text-white">
                    {systemType} | {activeTemplateData.watts}W
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-[48%] w-[min(680px,90vw)] -translate-x-1/2 -translate-y-1/2">
                <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.55]">
                  <span>Campo fotovoltaico</span>
                  <span>{panels.length} modulos</span>
                </div>
                <div
                  className="relative rounded-lg border border-eliot-cyan/[0.22] bg-eliot-cyan/[0.05] p-3 shadow-[0_0_48px_rgba(33,167,255,0.16)]"
                  style={{
                    transform:
                      viewMode === "3d"
                        ? "perspective(1050px) rotateX(56deg) rotateZ(-14deg)"
                        : "none",
                    transformOrigin: "center",
                  }}
                >
                  <div className="pointer-events-none absolute inset-3 rounded-md border border-dashed border-eliot-cyan/[0.18]" />
                  <div className="grid grid-cols-7 gap-1.5">
                    {panels.map((panel) => {
                      const template = getPanelTemplate(panel.templateId);
                      const isSelected = selectedPanel?.id === panel.id;

                      return (
                        <button
                          key={panel.id}
                          type="button"
                          draggable
                          onClick={() => setSelectedPanelId(panel.id)}
                          onDragStart={(event) => handlePanelDrag(event, panel.id)}
                          onDragOver={(event) => event.preventDefault()}
                          onDrop={(event) => handlePanelDrop(event, panel.id)}
                          className={cn(
                            "group relative h-11 overflow-hidden rounded-[4px] border transition hover:-translate-y-0.5",
                            isSelected
                              ? "border-eliot-cyan shadow-[0_0_28px_rgba(107,233,255,0.58)]"
                              : "border-blue-300/[0.38] shadow-[0_0_16px_rgba(33,167,255,0.14)]",
                          )}
                          style={{
                            backgroundColor: "#09215e",
                            backgroundImage:
                              "linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(135deg, rgba(33,167,255,0.34), rgba(3,12,38,0.1))",
                            backgroundSize: "18px 100%, 100% 12px, 100% 100%",
                          }}
                          title={`${template.name} | ${panel.watts}W`}
                        >
                          <span className="absolute inset-x-1.5 top-0.5 h-px bg-white/[0.26]" />
                          <span className="sr-only">
                            Configurar panel {panel.id}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[100px] left-[16%] hidden h-px w-[48%] bg-gradient-to-r from-eliot-cyan via-eliot-cyan/[0.55] to-transparent md:block" />
              <div className="absolute bottom-[100px] left-[16%] hidden h-[60px] w-px bg-eliot-cyan/[0.65] md:block" />
              <div className="absolute bottom-[155px] left-[64%] hidden rounded-full border border-eliot-cyan/[0.45] bg-eliot-cyan/[0.12] px-2 py-0.5 text-[10px] font-semibold text-eliot-cyan md:block">
                Bus DC
              </div>

              <div className="absolute bottom-6 left-6 w-[min(340px,calc(100%-3rem))] rounded-lg border border-eliot-cyan/[0.26] bg-[#0b1320] p-3 shadow-glow">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-eliot-cyan/[0.26] bg-eliot-cyan/[0.08] text-eliot-cyan shrink-0">
                    <Cpu className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase text-white">
                      Inversor
                    </p>
                    <p className="text-[10px] text-white/[0.58]">
                      Convierte DC a AC.
                    </p>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  <InverterStat label="AC" value={`${estimate.acKw.toFixed(2)} kW`} />
                  <InverterStat label="Unid." value={String(estimate.inverterCount)} />
                  <InverterStat label="Tipo" value={systemType} />
                </div>
              </div>

              {panels.length === 0 && (
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="rounded-lg border border-dashed border-eliot-cyan/[0.45] bg-eliot-cyan/[0.08] p-4 text-center">
                    <Move className="mx-auto h-6 w-6 text-eliot-cyan" />
                    <p className="mt-2 text-xs font-semibold text-white">
                      Arrastra un panel aqui
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid gap-px bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
              {kpis.map((kpi) => (
                <KpiTile key={kpi.label} {...kpi} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 rounded-lg border border-white/[0.1] bg-white/[0.035] p-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold text-white">
              Resultado preliminar: {formatCurrency(estimate.investment)}
            </p>
            <p className="mt-0.5 text-xs text-white/[0.62]">
              Se confirma con visita tecnica, levantamiento de sitio y recibos reales.
            </p>
          </div>
          <Button asChild className="shrink-0 h-9">
            <a href="/contacto">
              Solicitar propuesta <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function KpiTile({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="bg-[#07111c] p-2.5">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-eliot-cyan/[0.22] bg-eliot-cyan/[0.08] text-eliot-cyan shrink-0">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-black text-white">{value}</p>
          <p className="text-[10px] font-semibold text-white/[0.68]">{label}</p>
          <p className="mt-0.5 truncate text-[10px] text-white/[0.45]">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function InverterStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/[0.1] bg-white/[0.04] p-1.5">
      <p className="text-[9px] uppercase text-white/[0.46]">{label}</p>
      <p className="mt-0.5 truncate text-[11px] font-black text-white">{value}</p>
    </div>
  );
}
