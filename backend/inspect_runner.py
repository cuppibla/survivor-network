
from google.adk import Runner
import inspect
from google.adk.agents import InvocationContext

print(f"Runner type: {Runner}")
print(f"Runner init: {inspect.signature(Runner.__init__)}")
if hasattr(Runner, 'run'):
    print(f"Runner.run signature: {inspect.signature(Runner.run)}")

print(f"InvocationContext init: {inspect.signature(InvocationContext.__init__)}")
