
from google.adk.agents import Agent
import inspect

print("Inspecting Agent class...")
agent = Agent(model="gemini-2.5-flash", name="test")
print(f"Agent type: {type(agent)}")
print("Attributes/Methods:")
for name in dir(agent):
    if not name.startswith("_"):
        print(f"  {name}")
