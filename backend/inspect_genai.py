try:
    import google.genai.types as types
    print(f"google.genai.types: {types}")
    print(f"Content: {types.Content}")
    print(f"Part: {types.Part}")
except ImportError as e:
    print(f"Error importing google.genai.types: {e}")
except AttributeError as e:
    print(f"Error attribute: {e}")

try:
    import google.generativeai.types as types
    print(f"google.generativeai.types: {types}")
    print(f"Content (generativeai): {types.Content}")
except ImportError:
    pass
except AttributeError:
    pass
