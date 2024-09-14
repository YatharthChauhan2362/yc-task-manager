# Task Manager

A simple task manager application built with Flask. This application allows users to add and view tasks. It includes features for adding tasks, viewing tasks, and clearing all tasks.

## Table of Contents

- [Project Setup](#project-setup)
- [Running Locally](#running-locally)

## Project Setup

### Prerequisites

Ensure you have the following installed:

- [Python 3.x](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/YatharthChauhan2362/yc-task-manager.git
cd yc-task-manager
```

### Create a Virtual Environment

Create and activate a virtual environment:

```bash
python -m venv .venv
```

- **PowerShell:**

  ```powershell
  .\.venv\Scripts\Activate.ps1
  ```

- **Command Prompt:**

  ```cmd
  .\.venv\Scripts\activate
  ```

### Install Dependencies

Install the required Python packages:

```bash
pip install -r requirements.txt
```

## Running Locally

To run the Flask application locally, ensure your virtual environment is activated, and then execute:

```bash
python app.py
```

The application will be available at `http://127.0.0.1:5000`.
