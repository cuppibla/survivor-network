
from google.adk import Runner
import inspect
from google.adk import events

print("google.adk.events dir:")
print(dir(events))

# Deep inspect Runner.run annotation
sig = inspect.signature(Runner.run)
content_type = sig.parameters['new_message'].annotation
print(f"Content type annotation: {content_type}")
if hasattr(content_type, '__module__'):
    print(f"Content type module: {content_type.__module__}")
    print(f"Content type name: {content_type.__name__}")
