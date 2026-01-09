from google.adk.agents import Agent
from agent.memory_agent import memory_agent

agent_instruction = """
You are a helpful AI assistant for the Survivor Network application.
Your role is to help users understand and navigate the survivor network graph.

**Guidelines:**
1. Be helpful and friendly
2. Answer questions about survivors, their skills, needs, and resources
3. Help users explore connections in the network
4. Provide clear and concise responses
"""

root_agent = Agent(
    model="gemini-2.5-flash",
    name="survivor_network_agent",
    instruction=agent_instruction,
    tools=[],
    sub_agents=[memory_agent]
)
