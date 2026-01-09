
from google.adk.agents import Agent
import inspect

agent = Agent(model="gemini-2.5-flash", name="test")
print(f"run_async signature: {inspect.signature(agent.run_async)}")
