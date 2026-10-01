# 🏥 SwasthyaAI

## AI-Powered Citizen-Centric Healthcare Intelligence & Medical Assistance Platform

> **SwasthyaAI** is a modular healthcare AI platform designed to help citizens understand medical information, analyze medical images, securely access medical identity records, and receive explainable AI-assisted healthcare insights.

---

## 🚀 Project Overview

Healthcare information is often fragmented across:

- Laboratory reports
- Medical images
- MRI/X-ray scans
- Patient identity records
- Emergency information
- Doctor records
- Digital medical documents

SwasthyaAI brings these capabilities together into a unified healthcare intelligence platform.

The prototype combines:

1. **Medical Report Understanding**
2. **Chest X-Ray AI**
3. **Brain MRI AI**
4. **Medical Imaging Intelligence using MONAI**
5. **Digital Medical ID**
6. **Patient & Doctor Portals**
7. **Emergency Medical Access**
8. **AI Explainability**
9. **Medical Data Validation**
10. **Privacy & Consent-Oriented Architecture**

---

# 🎯 Core Objective

The objective of SwasthyaAI is not to replace doctors.

Instead, the platform acts as a **citizen-centric healthcare intelligence layer** between raw medical information and the people who need to understand or use it.

### Core Pipeline

```text
                ┌──────────────────────┐
                │    Citizen / Patient │
                └───────────┬──────────┘
                            │
                            ▼
                ┌──────────────────────┐
                │   SwasthyaAI Portal  │
                └───────────┬──────────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
    Medical Reports      Medical Images    Medical ID
          │                 │                 │
          ▼                 ▼                 ▼
      OCR + NLP        Imaging AI Layer   Secure Records
          │                 │                 │
          │        ┌────────┼────────┐        │
          │        │        │        │        │
          │       X-Ray    MRI    Ultrasound  │
          │        │        │        │        │
          │        └────────┼────────┘        │
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                  ┌─────────────────────┐
                  │ Validation & Safety │
                  │      Layer          │
                  └──────────┬──────────┘
                             ▼
                  ┌─────────────────────┐
                  │ Explainable Output  │
                  └──────────┬──────────┘
                             ▼
                ┌────────────────────────┐
                │ Citizen / Doctor View  │
                └────────────────────────┘
```

---

# 🧠 Major Features

## 1. 📄 Medical Report Understanding

SwasthyaAI can process medical reports and convert complex medical information into understandable citizen-facing explanations.

### Pipeline

```text
Medical Report
      ↓
Image / Document Upload
      ↓
OCR
      ↓
Structured Extraction
      ↓
Biomarker Validation
      ↓
Reference Range Analysis
      ↓
Safety Validation
      ↓
Plain-Language Explanation
      ↓
Regional Language
      ↓
Voice Assistance
```

### Key principles

- OCR confidence checking
- Structured medical-value extraction
- Reference-range awareness
- Biological plausibility checks
- Safety filtering
- Provenance tracking
- Citizen-friendly explanations
- Regional-language support
- Voice accessibility

---

# 🩻 2. Chest X-Ray AI

SwasthyaAI integrates the **XRAY medical imaging module** as a dedicated radiology screening capability.

The XRAY project provides a MONAI/PyTorch-based medical imaging laboratory with chest X-ray analysis and explainability.

### Supported X-Ray Findings

The current XRAY implementation defines multi-label analysis for:

- Normal
- Pneumonia
- Pleural Effusion
- Atelectasis
- Cardiomegaly
- Infiltration
- Consolidation
- Nodule

### Processing Pipeline

```text
X-Ray Upload
     ↓
Image Validation
     ↓
MONAI Preprocessing
     ↓
DenseNet121
     ↓
Multi-Label Prediction
     ↓
Confidence / Risk Information
     ↓
Grad-CAM
     ↓
Explainability Overlay
     ↓
Citizen / Doctor View
```

The XRAY implementation also distinguishes between:

```text
REAL MODEL
    ↓
Verified model weights
    ↓
Actual inference

DEMO MODE
    ↓
Clearly labelled simulation

MODEL NOT CONFIGURED
    ↓
Prediction blocked
    ↓
Configuration instructions
```

This separation is important because a healthcare prototype should **never present a simulated output as a real medical prediction**.

---

# 🧠 3. Brain MRI AI

The **Brain AI** module adds neurological imaging analysis to SwasthyaAI.

The current implementation contains an MRI pipeline covering:

- MRI image enhancement
- Noise reduction
- Contrast enhancement
- Skull stripping
- Tumor segmentation
- Radiomic feature extraction
- CNN classification
- SVM classification

### MRI Pipeline

```text
Brain MRI
    ↓
Image Enhancement
    ↓
Noise Reduction
    ↓
CLAHE
    ↓
Gamma Correction
    ↓
Skull Stripping
    ↓
Tumor Segmentation
    ↓
Feature Extraction
    ↓
┌───────────────┬───────────────┐
│               │               │
▼               ▼               │
CNN             SVM              │
│               │               │
└───────────────┴───────────────┘
                ↓
        AI-assisted Result
                ↓
        Visualization Layer
```

### MRI Enhancement

The implementation contains:

- Min-Max normalization
- Gaussian filtering
- Median filtering
- Bilateral filtering
- CLAHE
- Gamma correction

### Tumor Segmentation

Multiple segmentation approaches are available in the project:

- K-Means
- Fuzzy C-Means
- Watershed
- Seeded Region Growing

### Feature Extraction

The system extracts radiomic information including:

#### Texture

- Contrast
- Dissimilarity
- Homogeneity
- Energy
- ASM
- Correlation
- Entropy

#### Intensity

- Mean
- Variance
- Standard deviation
- Skewness
- Kurtosis
- Histogram entropy

#### Shape

- Area
- Perimeter
- Circularity
- Solidity
- Eccentricity
- Aspect ratio

These outputs can become inputs to SwasthyaAI's imaging-analysis layer.

---

# 🔬 4. MONAI Medical Imaging Engine

MONAI acts as the core medical-imaging AI framework within the architecture.

MONAI is a PyTorch-based open-source framework specifically designed for deep learning in healthcare imaging. It provides domain-specific preprocessing, networks, losses, metrics and healthcare-imaging workflows.

### SwasthyaAI Imaging Layer

```text
                 MONAI Imaging Engine
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
       ▼                 ▼                 ▼
     X-Ray             MRI            Ultrasound
       │                 │                 │
       ▼                 ▼                 ▼
 DenseNet121        MRI Models       DenseNet / UNet
       │                 │                 │
       └─────────────────┼─────────────────┘
                         ▼
                  Explainability
                         │
                         ▼
                  Validation Layer
```

### Current MONAI Capabilities

The integrated imaging architecture can support:

- Medical image preprocessing
- DenseNet-based classification
- UNet-based segmentation
- Grad-CAM explainability
- Multi-dimensional medical imaging
- Future CT workflows
- Future MRI 3D workflows
- GPU acceleration
- Model registry architecture

MONAI itself is designed to support healthcare-imaging workflows and can be installed through its Python package ecosystem.

---

# 🪪 5. Digital Medical ID

The **Medical ID module** provides the identity and record-access layer.

The current implementation contains:

- Digital Medical ID
- Patient dashboard
- Doctor dashboard
- Patient profile
- Doctor-patient profile
- Emergency profile
- QR scanning
- QR-based profile routing
- Patient directory
- Medical profile sharing
- Medical record navigation

### Medical ID Architecture

```text
                 Digital Medical ID
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       Patient          Doctor       Emergency
       Portal           Portal         Access
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                  Medical Records
                         │
                         ▼
                  SwasthyaAI Engine
```

### QR-Based Access

```text
Medical ID
    ↓
QR Code
    ↓
Scan
    ↓
Identify Medical ID
    ↓
Authorization / Access Flow
    ↓
Patient / Doctor / Emergency View
```

The current React implementation includes routes for patient dashboards, doctor dashboards, doctor-patient views, emergency profiles and medical-ID profiles.

---

# 🚑 6. Emergency Medical Access

Emergency situations require rapid access to critical information.

SwasthyaAI therefore includes a dedicated emergency profile flow.

```text
Emergency
    ↓
Scan Medical ID / QR
    ↓
Emergency Profile
    ↓
Critical Patient Information
    ↓
Authorized Medical Access
```

The emergency interface is intentionally separated from the normal patient and doctor dashboards.

---

# 👨‍⚕️ 7. Doctor Dashboard

The doctor-facing interface provides a separate workflow from the citizen-facing interface.

```text
Doctor Login
     ↓
Doctor Dashboard
     ↓
Patient Search
     ↓
Medical ID
     ↓
Patient Profile
     ↓
Medical Reports
     ↓
AI Imaging Results
     ↓
AI Explainability
     ↓
Clinical Review
```

AI output should remain **decision-support information**, not an autonomous diagnosis.

---

# 🛡️ 8. AI Safety & Validation Layer

This is the most important architectural layer.

SwasthyaAI should not directly convert raw AI output into a medical recommendation.

Instead:

```text
AI Output
    ↓
Structured Validation
    ↓
Image / Input Quality Check
    ↓
Model Status Verification
    ↓
Confidence Validation
    ↓
Biological / Clinical Plausibility
    ↓
Safety Rules
    ↓
Diagnostic Language Filtering
    ↓
Explainable Output
```

### Model States

Every imaging model should expose one of three states:

| State                  | Meaning                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `REAL MODEL`           | Verified model weights are available and inference is executed |
| `DEMO MODE`            | Output is simulated and explicitly labelled                    |
| `MODEL NOT CONFIGURED` | Model cannot generate predictions                              |

This prevents a major prototype failure: **showing fabricated AI predictions as if they came from an actual trained model.**

---

# 🔍 9. Explainable AI

SwasthyaAI should expose not only the prediction but also the evidence representation available from the model.

### X-Ray

```text
X-Ray
  ↓
Prediction
  ↓
Grad-CAM
  ↓
Heatmap
  ↓
Original + Heatmap Overlay
```

### MRI

```text
MRI
 ↓
Enhanced Image
 ↓
Segmentation
 ↓
Tumor Region
 ↓
Feature Visualization
```

### Ultrasound

```text
Ultrasound
    ↓
Classification / Segmentation
    ↓
Prediction
    ↓
CAM / Boundary Overlay
```

The purpose is to make AI output more inspectable rather than presenting a black-box label.

---

# 🏗️ 10. Unified SwasthyaAI Architecture

```text
┌─────────────────────────────────────────────────────────┐
│                    SWASTHYA AI                         │
│        Citizen-Centric Healthcare Platform             │
└─────────────────────────┬───────────────────────────────┘
                          │
        ┌─────────────────┼──────────────────┐
        │                 │                  │
        ▼                 ▼                  ▼
┌───────────────┐ ┌───────────────┐ ┌────────────────┐
│ Medical       │ │ Medical       │ │ Digital        │
│ Reports       │ │ Imaging       │ │ Medical ID     │
└───────┬───────┘ └───────┬───────┘ └───────┬────────┘
        │                 │                  │
        ▼                 ▼                  ▼
      OCR/NLP        MONAI Imaging       QR / Records
        │                 │                  │
        │       ┌─────────┼──────────┐       │
        │       │         │          │       │
        │       ▼         ▼          ▼       │
        │     X-Ray      MRI    Ultrasound    │
        │       │         │          │       │
        └───────┴─────────┼──────────┴───────┘
                          ▼
                ┌──────────────────┐
                │ Validation Layer │
                └────────┬─────────┘
                         ▼
                ┌──────────────────┐
                │ Safety Layer     │
                └────────┬─────────┘
                         ▼
                ┌──────────────────┐
                │ Explainability   │
                └────────┬─────────┘
                         ▼
              ┌───────────────────────┐
              │ Citizen / Doctor UI   │
              └───────────────────────┘
```

---

# 🧩 11. Module Mapping

| Repository      | SwasthyaAI Module           | Primary Responsibility                         |
| --------------- | --------------------------- | ---------------------------------------------- |
| `XRAY`          | X-Ray Imaging Module        | Chest X-ray screening + Grad-CAM               |
| `brain-ai-090`  | Brain MRI Module            | MRI enhancement, segmentation & classification |
| `medical-id-`   | Digital Medical Identity    | Patient, doctor & emergency medical access     |
| `monai`         | Medical Imaging Foundation  | Healthcare imaging AI infrastructure           |
| SwasthyaAI Core | Intelligence & Safety Layer | Report understanding, validation & explanation |

---

# 🔄 12. End-to-End User Journey

## Citizen Journey

```text
Open SwasthyaAI
       ↓
Create / Access Medical ID
       ↓
Upload Medical Report
       ↓
Upload Medical Image
       ↓
AI Processing
       ↓
Validation
       ↓
Explainability
       ↓
Simple Explanation
       ↓
Regional Language
       ↓
Voice Assistance
```

---

## Doctor Journey

```text
Doctor Dashboard
       ↓
Search Patient
       ↓
Open Medical ID
       ↓
Review Reports
       ↓
Review X-Ray / MRI
       ↓
Inspect AI Explanation
       ↓
Review Patient Context
       ↓
Clinical Decision
```

---

## Emergency Journey

```text
Emergency
   ↓
Scan Medical ID
   ↓
Emergency Profile
   ↓
Relevant Patient Information
   ↓
Authorized Access
```

---

# 💻 13. Technology Stack

## Frontend

- React
- Vite
- JavaScript
- React DOM
- Lucide React
- QR Code generation
- Responsive healthcare UI

## AI / Machine Learning

- Python
- PyTorch
- MONAI
- TensorFlow
- Keras
- Scikit-learn
- OpenCV
- NumPy
- SciPy
- scikit-image

## Medical Imaging

- DenseNet121
- UNet
- Grad-CAM
- CNN
- SVM
- K-Means
- Fuzzy C-Means
- Watershed
- Radiomic feature extraction

## Visualization

- Matplotlib
- Heatmaps
- Segmentation overlays
- Medical-image visualization
- Clinical report generation

---

# 📂 14. Proposed SwasthyaAI Project Structure

```text
swasthya-ai/
│
├── frontend/
│   ├── patient/
│   ├── doctor/
│   ├── emergency/
│   └── medical-id/
│
├── backend/
│   ├── api/
│   ├── authentication/
│   ├── medical-records/
│   └── consent/
│
├── ai/
│   ├── report-understanding/
│   │
│   ├── imaging/
│   │   ├── xray/
│   │   ├── mri/
│   │   ├── ultrasound/
│   │   └── common/
│   │
│   ├── validation/
│   ├── safety/
│   └── explainability/
│
├── models/
│   ├── xray/
│   ├── brain-mri/
│   └── ultrasound/
│
├── data/
│   ├── uploads/
│   ├── processed/
│   └── outputs/
│
├── reports/
│
├── docs/
│   ├── architecture/
│   ├── clinical/
│   └── api/
│
└── tests/
```

---

# 🔌 15. Integration Strategy

The repositories should **not simply be copied into one folder**.

Instead, each project should become an independent module behind a common SwasthyaAI interface.

### Recommended architecture

```text
React Frontend
      │
      ▼
SwasthyaAI API Gateway
      │
      ├──────────────► Medical Report Service
      │
      ├──────────────► X-Ray Service
      │
      ├──────────────► Brain MRI Service
      │
      ├──────────────► Ultrasound Service
      │
      ├──────────────► Medical ID Service
      │
      └──────────────► Validation & Safety Service
```

This avoids tightly coupling the React application to Python/TensorFlow/PyTorch inference code.

---

# 🧠 16. Unified Imaging API

A common interface should be created for every imaging model.

Example:

```json
{
  "request_id": "IMG-2026-00001",
  "patient_id": "SWAS-2026-000001",
  "modality": "xray",
  "model": "chest-xray-v1",
  "status": "REAL_MODEL",
  "prediction": {
    "findings": [],
    "confidence": {}
  },
  "explainability": {
    "type": "gradcam",
    "available": true
  },
  "validation": {
    "image_quality": "PASS",
    "model_loaded": true
  }
}
```

For MRI:

```json
{
  "request_id": "IMG-2026-00002",
  "patient_id": "SWAS-2026-000001",
  "modality": "brain_mri",
  "model": "brain-mri-v1",
  "status": "REAL_MODEL",
  "preprocessing": {
    "enhancement": true,
    "skull_stripping": true
  },
  "segmentation": {
    "available": true
  },
  "classification": {
    "available": true
  }
}
```

---

# 🔐 17. Privacy & Security Principles

SwasthyaAI should follow a privacy-first architecture.

### Principles

- Explicit patient consent
- Least-privilege access
- Role-based authorization
- Secure medical-record storage
- Audit logging
- Emergency access controls
- Medical-ID based routing
- Secure file handling
- Input validation
- Model-status verification
- No fabricated clinical output

---

# 🧪 18. Testing Strategy

Testing should cover four levels.

### Unit Testing

```text
Input Validation
     ↓
Preprocessing
     ↓
Model Loading
     ↓
Inference
     ↓
Output Validation
```

### Integration Testing

```text
Frontend
   ↓
API
   ↓
AI Service
   ↓
Validation
   ↓
Response
```

### Safety Testing

Test:

- Missing model weights
- Corrupted images
- Blank images
- Unsupported formats
- Invalid patient IDs
- Invalid medical values
- Low-confidence outputs
- Demo-mode outputs

### UI Testing

Test:

- Patient dashboard
- Doctor dashboard
- Emergency view
- Medical ID
- QR scanner
- X-ray analysis
- MRI analysis
- AI report view

---

# 📸 19. Screenshots

Add your prototype screenshots here.

## Main Dashboard

```text
docs/screenshots/dashboard.png
```



---

## Medical ID

```text
docs/screenshots/medical-id.png
```



---

## X-Ray Analysis

```text
docs/screenshots/xray-analysis.png
```



---

## Brain MRI Analysis

```text
docs/screenshots/brain-mri.png
```



---

## AI Explainability

```text
docs/screenshots/explainability.png
```



---

## Doctor Dashboard

```text
docs/screenshots/doctor-dashboard.png
```



---

## Emergency Medical Profile

```text
docs/screenshots/emergency-profile.png
```



---

# 📊 20. Prototype Demonstration Flow

For a hackathon demonstration, the recommended flow is:

```text
1. Open SwasthyaAI
        ↓
2. Show Digital Medical ID
        ↓
3. Open Patient Dashboard
        ↓
4. Upload Medical Report
        ↓
5. Show structured extraction
        ↓
6. Open X-Ray Analysis
        ↓
7. Show AI finding
        ↓
8. Show Grad-CAM explanation
        ↓
9. Open Brain MRI
        ↓
10. Show enhancement + segmentation
        ↓
11. Return to patient profile
        ↓
12. Open Doctor Dashboard
        ↓
13. Show combined patient information
        ↓
14. Demonstrate Emergency QR flow
```

This makes the prototype look like **one healthcare platform**, rather than four disconnected GitHub projects.

---

# ⚠️ 21. Medical Safety Disclaimer

SwasthyaAI is a research and prototype platform.

AI-generated results are intended to demonstrate healthcare decision-support workflows and medical-image analysis capabilities.

They are **not a substitute for diagnosis, treatment, or professional medical judgment**.

Real clinical deployment requires:

- Clinical validation
- Appropriate datasets
- Independent performance evaluation
- Regulatory review
- Security assessment
- Clinical workflow validation
- Qualified healthcare-professional oversight

---

# 🧪 22. Current Prototype Status

| Component                    | Status                    |
| ---------------------------- | ------------------------- |
| Digital Medical ID           | Prototype                 |
| Patient Portal               | Prototype                 |
| Doctor Portal                | Prototype                 |
| Emergency Profile            | Prototype                 |
| QR Medical ID                | Prototype                 |
| X-Ray AI                     | Prototype                 |
| Brain MRI AI                 | Research Prototype        |
| MONAI Imaging Layer          | Integrated Research Layer |
| Medical Report Understanding | Prototype                 |
| AI Explainability            | Prototype                 |
| Clinical Deployment          | Not intended              |
| Regulatory Approval          | Not claimed               |

---

# 🗺️ 23. Future Roadmap

### Phase 1 — Prototype

- X-Ray
- MRI
- Medical ID
- Patient portal
- Doctor portal
- Emergency access
- Report understanding

### Phase 2 — AI Integration

- Unified inference API
- Model registry
- Better explainability
- Model versioning
- Confidence calibration
- Central validation service

### Phase 3 — Multimodal Healthcare

- CT
- MRI 3D
- Ultrasound
- Pathology imaging
- Additional laboratory-report analysis

### Phase 4 — Healthcare Interoperability

- FHIR
- HL7
- ABDM-compatible workflows
- Consent management
- Hospital integrations

### Phase 5 — Clinical Validation

- Prospective evaluation
- Multi-center validation
- Bias evaluation
- Safety evaluation
- Clinical usability testing

---

# 📚 24. Research & Open-Source Components

SwasthyaAI builds upon multiple research and open-source components.

### Project Repositories

- `XRAY` — Swasthya MONAI Medical Imaging Lab
- `brain-ai-090` — Brain MRI analysis pipeline
- `medical-id-` — Digital Medical Identity frontend
- `monai` — Medical imaging AI framework

The MONAI ecosystem provides healthcare-specific deep-learning infrastructure for medical imaging, including preprocessing and model-development capabilities.

---

# 👨‍💻 25. Developer

**Vishwas Upadhyay**

AI / ML • Healthcare AI • Medical Imaging • Full-Stack Development\


---

# ⚖️ 26. Final Architecture Principle

> **SwasthyaAI does not treat AI prediction as the final answer.**

The platform follows:

```text
INPUT
  ↓
AI PROCESSING
  ↓
STRUCTURED OUTPUT
  ↓
VALIDATION
  ↓
SAFETY CHECK
  ↓
EXPLAINABILITY
  ↓
HUMAN REVIEW
  ↓
CITIZEN / DOCTOR ASSISTANCE
```

This architecture allows SwasthyaAI to combine **medical report intelligence, medical imaging, digital medical identity and emergency healthcare access** into one modular platform while keeping AI output separated from final clinical decision-making.
