# User Guide: Land Cover Classification

## Introduction
This script is designed to classify land cover in Greece using Random Forest (RF) Regression from Sentinel-2 Level-2 images.

To use this code effectively, follow these steps:

## Step 1: Customize Parameters
- Specify the date range (start and end dates) to sample Sentinel-2 images.
- Define the cloud cover threshold as a percentage in the 'cloud' variable.
- (Optional) By default, the code is used to classify the land cover for Greece, but there is an option to specify your Area Of Interest (AOI) by selecting from the "ADMINISTRATIVE BOUNDARIES SELECTION" list below and replace the variable Greece with AOI_Selection to classify land cover for a specific region.

## Step 2: Image Collection and Preprocessing
The code will collect all images with cloud cover less than the specified threshold within the date range and will apply the Random Forest ML algorithm for the region. The results efficiency of the algorithm is displayed on the Console.

## Optional Parameters
In the parameters section, you can change the smoothing window for the classified image. Adjust the number of trees used in the Random Forest algorithm.

After setting the parameters, run the script to see the Classification of Land Cover for Greece based on images captured in September - October 2023

## PART 2 - TRAINING DATA
### Predefined Sample Classes:
The following land cover classes are predefined:
- Crops (0)
- Soil (1)
- Buildup/Baren (2)
- Waterbodies (3)
- Sparse Vegetation (4)
- Transitional Woodland (5)
- Mixed Forest (6)
- Coniferous (7)
- Scar (8)

If you need to gather new training data, use the same class names or modify the script accordingly.


