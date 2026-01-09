"""
Inspect existing Spanner table schema
"""

from google.cloud import spanner
from config import settings
import os

# Set credentials
if settings.GOOGLE_APPLICATION_CREDENTIALS:
    os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = settings.GOOGLE_APPLICATION_CREDENTIALS

def inspect_schema():
    """Inspect the existing database schema."""
    
    client = spanner.Client(project=settings.PROJECT_ID)
    instance = client.instance(settings.INSTANCE_ID)
    database = instance.database(settings.DATABASE_ID)
    
    print("=" * 60)
    print("Inspecting Database Schema")
    print("=" * 60)
    
    with database.snapshot() as snapshot:
        # Get all tables
        results = snapshot.execute_sql("""
            SELECT 
                t.table_name,
                c.column_name,
                c.spanner_type
            FROM 
                information_schema.tables AS t
            JOIN 
                information_schema.columns AS c
            ON 
                t.table_name = c.table_name
            WHERE 
                t.table_schema = ''
            ORDER BY 
                t.table_name, c.ordinal_position
        """)
        
        current_table = None
        for row in results:
            table_name, column_name, spanner_type = row
            
            if table_name != current_table:
                if current_table is not None:
                    print()
                print(f"\nTable: {table_name}")
                print("-" * 40)
                current_table = table_name
            
            print(f"  {column_name}: {spanner_type}")

if __name__ == "__main__":
    print(f"Project: {settings.PROJECT_ID}")
    print(f"Instance: {settings.INSTANCE_ID}")
    print(f"Database: {settings.DATABASE_ID}\n")
    
    inspect_schema()
