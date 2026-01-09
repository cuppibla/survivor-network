
import google.adk
print("google.adk dir:")
print(dir(google.adk))

import google.adk.agents
print("google.adk.agents dir:")
print(dir(google.adk.agents))

# Try to find InvocationContext
def find_class(module, name):
    if hasattr(module, name):
        return getattr(module, name)
    for attr in dir(module):
        obj = getattr(module, attr)
        if hasattr(obj, name):
            return getattr(obj, name)
    return None

try:
    from google.adk.types import InvocationContext
    print("Found in types")
except ImportError:
    print("Not in types")

try:
    from google.adk.context import InvocationContext
    print("Found in context")
except ImportError:
    print("Not in context")
