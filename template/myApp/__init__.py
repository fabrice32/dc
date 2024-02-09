import streamlit.components.v1 as components

# Create a function _component_func which will call the frontend component when run
_component_func = components.declare_component(
    "strem_tester",
    url="http://localhost:3001",  # Fetch frontend component from local webserver
)

# Define a public function for the package,
# which wraps the caller to the frontend code
def testMessage(message: str):
    component_value = _component_func(message=message)
    return component_value
