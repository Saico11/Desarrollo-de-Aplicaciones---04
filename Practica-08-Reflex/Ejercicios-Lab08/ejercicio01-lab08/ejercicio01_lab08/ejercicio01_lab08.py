import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False

    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes

tareas_pendientes = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 3", "estado": "Pendiente"},
    {"titulo": "Tarea 5", "estado": "Pendiente"},
]
tareas_completas = [
    {"titulo": "Tarea 2", "estado": "Completado"},
    {"titulo": "Tarea 4", "estado": "Completado"},
]

def tarjeta_tarea(tarea):
    return rx.table.row(
        rx.table.cell(tarea["titulo"]),
        rx.table.cell(tarea["estado"]),
    )

def columna_kanban(nombre, tareas):
    return (
        rx.hstack(
            rx.heading(nombre),
            rx.table.root(
                rx.table.body(
                    rx.foreach(
                        tareas,
                        tarjeta_tarea,
                    )
                ),
            ),
        padding="20px",
        border="1px solid #303030",
        border_radius="8px",
        box_shadow="0 4px 8px rgba(34, 34, 34, 0.7)",
        width="100%",
        max_width="500px",
        margin="20px auto",
	background="linear-gradient(#2a2a2a, #000)",
        ),
    )

def index():
    return rx.cond(
        State.mostrar_solo_pendientes,
        rx.flex(
            rx.button(
		"Ver Tareas Completadas", 
		on_click=State.mostrar_pendientes,
         	color="white",
                background="radial-gradient(farthest-corner at bottom center, rgba(29, 196, 82, .7), transparent), linear-gradient(to bottom, rgba(0, 100, 81, 0.72), rgba(0, 128, 81, 0.8))",
       		border="1px solid rgba(0, 128, 81, 0.8)",
           	margin_bottom="20px",
            	padding="10px 20px",
            	border_radius="8px",
            	box_shadow="0 4px 8px rgba(0, 0, 0, 0.1)",
	    ),
            columna_kanban("En Progreso", tareas_pendientes),
            width="100%",
            justify="center",
            margin="20px"
        ),
        rx.hstack(
            rx.button(
		"Ver Tareas Pendientes", 
		on_click=State.mostrar_pendientes,
         	color="white",
                background="radial-gradient(farthest-corner at bottom center, rgba(82, 196, 229, .7), transparent), linear-gradient(to bottom, rgba(0, 100, 150, 0.72), rgba(0, 128, 200, 0.8))",
       		border="1px solid rgba(0, 128, 200, 0.8)",
           	margin_bottom="20px",
            	padding="10px 20px",
            	border_radius="8px",
            	box_shadow="0 4px 8px rgba(0, 0, 0, 0.1)",
	    ),
            columna_kanban("Completadas", tareas_completas),
            width="100%",
            justify="center",
            margin="20px"
        ),
    )

app = rx.App()
app.add_page(index)