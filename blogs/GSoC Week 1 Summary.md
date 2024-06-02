# GSoC Week 1 Summary

##### 27 May 2024 - 02 June 2024


## Introduction
Welcome to my Week 1 summary of my Google Summer of Code (GSoC) journey. This week, my focus was on setting up the AGL master branch on a remote server and starting the process of creating Yocto recipes for Whisper AI. The journey was filled with learning experiences and challenges that helped me grow and understand the intricacies of open source development in the Automotive Grade Linux (AGL) environment.

## Tasks I Have Completed This Week

- **Setup the AGL master branch on the remote server**: Followed the steps on [AGL Documentation](https://docs.automotivelinux.org/en/quillback/#01_Getting_Started/02_Building_AGL_Image/03_Downloading_AGL_Software/) to build the AGL image.

- **Started creating the Yocto recipes for Whisper AI** and successfully created the recipes for:
    - `python3-torch`
    - `python3-numba`
    - `python3-tiktoken`
    - `sleef`

## Issues Faced

- **CMake and Ninja dependencies**: Faced issues related to CMake and Ninja dependencies while creating the recipe for `python3-triton`.

- **OpenBLAS, SciPy, and LAPACK**: Encountered problems with these dependencies while building the `agl-service-voiceagent`.

## Next Week Tasks

- **Complete the recipes for Whisper AI**: Focus on finalizing the Yocto recipes required for Whisper AI.

- **Resolve issues in building the voice-agent**: Address the dependency issues to ensure a successful build of the voice-agent service.

## Useful Resources

- [meta-offline-voice-agent by malik727](https://github.com/malik727/meta-agl-devel/tree/master/meta-offline-voice-agent)
- [recipes-ml by t-kuha](https://github.com/t-kuha/recipes-ml)
- [OpenEmbedded Layer Index](https://layers.openembedded.org/layerindex/branch/master/layers/)

## Conclusion
This week has been productive with significant progress in setting up the development environment and starting the core tasks. Despite encountering several challenges, I am confident that with continued effort and the resources at my disposal, I will be able to overcome these hurdles. I look forward to diving deeper into the project in the coming weeks and achieving my goals for the next phase of my GSoC journey.
