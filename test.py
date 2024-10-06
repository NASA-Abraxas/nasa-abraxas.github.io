import os
import json

def save_filenames_to_json(directory, output_file, prefix="/water_cot/water_cot/res/"):
    """Save filenames from the specified directory to a JSON file, with a prefix added to each filename."""
    # Check if the directory exists
    if not os.path.exists(directory):
        return "Directory does not exist."

    # List all files in the directory and prepend the prefix to each filename
    filenames = [prefix + f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

    # Write filenames with prefix to a JSON file
    with open(output_file, 'w') as file:
        json.dump(filenames, file)

    return f"Filenames have been saved to {output_file}"

# Usage
directory_path = './public/water_cot/water_cot/res/'  # Replace with the path to your directory
output_json_file = 'filenames.json'        # Name of the JSON file to save the filenames
result = save_filenames_to_json(directory_path, output_json_file)
print(result)
