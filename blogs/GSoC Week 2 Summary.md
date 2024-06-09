# GSoC Week 02 Summary
**Date**: 03 Jun 2024 - 09 Jun 2024

## Introduction
This week, I made significant progress in integrating Whisper AI into the AGL (Automotive Grade Linux) platform. My efforts included creating new recipes, modifying existing ones, and resolving various dependency issues. While I successfully compiled Whisper AI on the AGL image, some challenges remain, particularly with the transcription process. Overall, this week was productive in laying the groundwork for further development and optimization.

## Tasks I have completed this week:

- Created the following recipes:

  - `python3-numba`

  - `llvmlite`

  - `openai-whisper`

  - `openai-whisper-tiny`

- Modified the recipes for PyTorch from the meta-python-ai layer.
- Packaged all recipes into the [meta-whisper](https://github.com/Anuj-S62/meta-whisper) layer.
- Successfully compiled and tested Whisper AI on the agl-ivi-demo-flutter image.
- Resolved some issues in agl-service-voiceagent, including recipes for openblas, lapack, and vosk-kaldi. However, issues with python3-scipy remain unresolved.

## Issues Faced:

- Faced a dependency issue with llvmlite: llvmlite requires LLVM 14, while AGL uses LLVM 18. I resolved this by using a precompiled wheel for llvmlite.

## Next Week Tasks:

- Resolve the remaining issues in agl-service-voiceagent.

- Begin integrating Whisper AI with agl-service-voiceagent.

## Conclusion

This week has been productive in terms of setting up the foundational recipes and addressing challenges.

## Resources:

- [meta-python-ai](https://layers.openembedded.org/layerindex/branch/scarthgap/layer/meta-python-ai/)
