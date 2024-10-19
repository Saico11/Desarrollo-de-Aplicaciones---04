import reflex as rx

class CountState(rx.State):
    count: int = 0
    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

def counter():
    return rx.flex(
        rx.vstack(
            rx.heading("Experiencia 1: Contador Simple", font_size="24px", margin="10px"),
            rx.box(
                rx.button(
                    "Disminuir",
                    color_scheme="red",
                    on_click=CountState.decrement,
                ),
                rx.heading(CountState.count, margin="10px"),
                rx.button(
                    "Incrementar",
                    color_scheme="grass",
                    on_click=CountState.increment,
                ),
                display="flex",
                justify_content="center",
                align_items="center",
                width="100%"
            ),
            spacing="3",
        ),
        width="100%",
        justify="center",
        margin="5px"
    )

def index() -> rx.Component:
    return rx.container(
        counter(),
    )

app = rx.App()
app.add_page(index)
