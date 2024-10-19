import reflex as rx

class TareasState(rx.State):
    tareas: list[str] = []
    nueva_tarea: str = ""

    def agregar_tarea(self):
        if self.nueva_tarea:
            self.tareas.append(self.nueva_tarea)
            self.nueva_tarea = ""

def AgregarTarea():
    return rx.box(
        rx.input(
            placeholder="Escribe una nueva tarea...",
            value=TareasState.nueva_tarea,
            on_change=TareasState.set_nueva_tarea,
            width="100%",
        ),
        rx.button(
            "Agregar Tarea",
            on_click=TareasState.agregar_tarea,
            color_scheme="green",
	    margin_top="5px"
        ),
        width="100%",
        #border="1px solid #ccc",
        border_radius="10px",
    )

def ListaTareas():
    return rx.box(
        rx.heading("Lista de Tareas", text_align="center"),
        rx.foreach(
            TareasState.tareas,
            lambda tarea: rx.box(
                tarea,
                border_bottom="1px solid #dddddd38",
                border_radius="10px",
                width="100%",
            )
        ),
        width="100%",
        #border="1px solid #ccc",
    )

def index() -> rx.Component:
    return rx.container(
        rx.vstack(
	    rx.heading("Experiencia 2: Lista de Tareas", font_size="24px", margin="10px"),
            AgregarTarea(),
            ListaTareas(),
            spacing="20px",
            align_items="center",
            width="100%",
        ),
        max_width="600px",
    )

app = rx.App()
app.add_page(index)