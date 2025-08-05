import os

def export_jupyter_filenames():
    """Export all filenames from assets/jupyter directory"""
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

if __name__ == "__main__":
    export_jupyter_filenames()

