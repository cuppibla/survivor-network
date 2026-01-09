import google.adk
from google.adk.models import llm_request
import inspect

try:
    print(f"LlmRequest: {llm_request.LlmRequest}")
    print(f"LlmRequest signature: {inspect.signature(llm_request.LlmRequest)}")
    print(f"LlmRequest dir: {dir(llm_request.LlmRequest)}")

except Exception as e:
    print(f"Error: {e}")
