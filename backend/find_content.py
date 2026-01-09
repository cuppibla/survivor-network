
import google.adk.models
print("google.adk.models dir:")
print(dir(google.adk.models))

try:
    from google.adk.models import Content
    print("Found Content in models")
except ImportError:
    pass

try:
    from google.adk.types import Content
    print("Found Content in types")
except ImportError:
    pass
