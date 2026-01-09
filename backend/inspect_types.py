import google.adk

try:
    from google.adk import models
    print(f"dir(google.adk.models): {dir(models)}")
    from google.adk.models import Content
    print(f"Content signature: {dir(Content)}")
except ImportError as e:
    print(f"Error importing models or Content: {e}")
