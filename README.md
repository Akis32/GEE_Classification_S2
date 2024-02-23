# User Guide: Land Cover Classification

## Introduction
This scripts are designed to classify land cover in Greece using Random Forest (RF) Regression from Sentinel-2 Level-2 and Sentinel-1 images.

## Land cover classification with Random Forest and Dynamic World
This algorithm is designed to classify images taken from a specific and relatively small time window. Given the lack of time variability of the pixel values the algorithm uses
Dynamic World dataset to identify crops and urban fabric, while other classes are classified by the algorithm.

## Land cover classification with Random Forest on yearly Sentinel-1 and Sentinel-2 images.
This algorithm uses annual Sentinel-1 and Sentinel-2 images to classify land cover in Greece. The Random Forest algorithm is trained on a dataset of 2022 images and 
can be applied to future years easily by changing the dates in the 'main' function.

If you need to gather new training data, use the same class names or modify the script accordingly.


