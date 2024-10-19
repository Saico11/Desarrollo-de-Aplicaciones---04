import reflex as rx
from typing import List, Dict

class State(rx.State):
    mostrar_solo_pendientes: bool = False
    contadores: Dict[str, int] = {"Pendiente": 0, "Completado": 0}
    tareas: List[Dict[str, str]] = [
        {"titulo": "Tarea 1", "estado": "Pendiente"},
        {"titulo": "Tarea 3", "estado": "Pendiente"},
        {"titulo": "Tarea 5", "estado": "Pendiente"},
        {"titulo": "Tarea 2", "estado": "Completado"},
        {"titulo": "Tarea 4", "estado": "Completado"},
    ]

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

    def contar_tareas_por_estado(self):
        self.contadores = {"Pendiente": 0, "Completado": 0}
        for tarea in self.tareas:
            estado = tarea["estado"]
            if estado in self.contadores:
                self.contadores[estado] += 1

    def on_load(self):
        self.contar_tareas_por_estado()

def tarjeta_tarea(tarea: Dict[str, str]):
    return rx.table.row(
        rx.table.cell(tarea["titulo"]), 
        rx.table.cell(tarea["estado"]),
    )

def columna_kanban(nombre: str, estado_filtro: str):
    return (
        rx.box(
            rx.vstack(
                rx.heading(nombre),
                rx.table.root(
                    rx.table.body(
                        rx.foreach(
                            State.tareas, 
                            lambda tarea: rx.cond(
                                tarea["estado"] == estado_filtro,
                                tarjeta_tarea(tarea),
                                None  
                            )
                        )
                    ),
                ),
                padding="20px",
                border="1px solid #303030",
                border_radius="8px",
                box_shadow="0 4px 8px rgba(34, 34, 34, 0.7)",

                background="linear-gradient(#2a2a2a, #000)",
            ),
            display="flex",
            justify_content="center",
            align_items="center",
            width="100%",
            margin="0 auto"
        )
    )


def mostrar_contador():
    return rx.cond(
        State.mostrar_solo_pendientes,
        rx.box(
            rx.text(
                f"Tareas Pendientes: {State.contadores['Pendiente']}",
                font_size="20px",
                margin="10px"
            ),
            display="flex",
            justify_content="center",
            align_items="center",
            width="100%"
        ),
        rx.box(
            rx.text(
                f"Tareas Completadas: {State.contadores['Completado']}",
                font_size="20px",
                margin="10px"
            ),
            display="flex",
            justify_content="center",
            align_items="center",
            width="100%"
        )
    )

def index():
    return rx.cond(
        State.mostrar_solo_pendientes,
        rx.vstack(
            rx.heading("Ejercicio 2: Contador de Tareas por Estado en Tablero Kanban", font_size="24px", margin="10px"),
            mostrar_contador(),
            rx.button(
		"Ver Tareas Completadas", 
		on_click=State.mostrar_pendientes,
         	color="white",
                background="radial-gradient(farthest-corner at bottom center, rgba(29, 196, 82, .7), transparent), linear-gradient(to bottom, rgba(0, 100, 81, 0.72), rgba(0, 128, 81, 0.8))",
       		border="1px solid rgba(0, 128, 81, 0.8)"
	    ),
            columna_kanban("Pendientes", "Pendiente"),
            width="100%",
            justify="center",
            margin="20px"
        ),
        rx.vstack(
            rx.heading("Ejercicio 2: Contador de Tareas por Estado en Tablero Kanban", font_size="24px", margin="10px"),
            mostrar_contador(),  
            rx.button(
		"Ver Tareas Pendientes",
		on_click=State.mostrar_pendientes,
         	color="white",
                background="radial-gradient(farthest-corner at bottom center, rgba(82, 196, 229, .7), transparent), linear-gradient(to bottom, rgba(0, 100, 150, 0.72), rgba(0, 128, 200, 0.8))",
       		border="1px solid rgba(0, 128, 200, 0.8)"
	    ),
            columna_kanban("Completadas", "Completado"),
            width="100%",
            justify="center",
            margin="20px"
        ),
    )

app = rx.App()
app.add_page(index, on_load=State.on_load) 