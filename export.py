import os
import subprocess
import sys

def export_jupyter_filenames():
    """Export all filenames from assets/jupyter directory (legacy function)"""
    jupyter_path = "assets/jupyter"
    
    # Check if directory exists
    if not os.path.exists(jupyter_path):
        print(f"Directory {jupyter_path} does not exist")
        return
    
    # Get all filenames
    filenames = []
    for filename in os.listdir(jupyter_path):
        file_path = os.path.join(jupyter_path, filename)
        if os.path.isfile(file_path):
            filenames.append(filename)
    
    # Output filenames
    print(f"Found {len(filenames)} files in {jupyter_path} directory:")
    for filename in sorted(filenames):
        print(f'"{filename}",')
    
    return filenames

def generate_notebook_config():
    """Generate notebook configuration by running the config generator script"""
    print("🔄 Generating notebook configuration...")
    
    try:
        # Run the notebook config generator
        result = subprocess.run([sys.executable, 'generate_notebook_config.py'], 
                              capture_output=True, text=True)
        
        if result.returncode == 0:
            print("✅ Notebook configuration generated successfully!")
            print(result.stdout)
        else:
            print("❌ Failed to generate notebook configuration:")
            print(result.stderr)
            return False
            
    except Exception as e:
        print(f"❌ Error running config generator: {e}")
        return False
    
    return True

if __name__ == "__main__":
    print("🚀 Exporting Jupyter notebook information...")
    
    # Generate the new configuration file
    if generate_notebook_config():
        print("\n📋 Configuration file updated!")
    else:
        print("\n⚠️ Using legacy export method...")
        export_jupyter_filenames()
    
    print("\n💡 The website will now automatically discover your notebooks!")

