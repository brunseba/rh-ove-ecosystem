# RH OVE Ecosystem - Task Management

This document describes the task management system for the RH OVE Ecosystem project.

## Task Runner

This project uses Go's **Task** (gotask) as a task runner to simplify common development and maintenance tasks.

### Installing Task

If you don't have `task` installed:

```bash
# macOS
brew install go-task/tap/go-task

# Linux
sh -c "$(curl -ssL https://taskfile.dev/install.sh)"

# Or via Go
go install github.com/go-task/task/v3/cmd/task@latest

# Or download from releases
# https://github.com/go-task/task/releases
```

## Global Tasks (Project Root)

From the project root directory, run:

```bash
task --list
```

### Available Global Tasks

- `task setup` - Setup the entire project environment
- `task clean` - Clean all temporary files and caches
- `task export-workload` - Export workload data to XLSX
- `task docs:build` - Generate project documentation
- `task docs:serve` - Serve documentation locally
- `task health-check` - Run project health check
- `task update` - Update all dependencies
- `task status` - Show project status
- `task init` - Initialize a new development environment
- `task ci` - Run continuous integration checks

## Scripts-Specific Tasks

From the `scripts/` directory, run:

```bash
cd scripts
task --list
```

### Available Scripts Tasks

- `task setup` - Setup the scripts environment
- `task install` - Install dependencies
- `task add <dep>` - Add a new dependency (with prompt)
- `task export-workload` - Run the workload export script
- `task export-workload-py` - Run export script directly with Python
- `task check` - Check Python syntax
- `task format` - Format code
- `task lint` - Lint code
- `task test` - Run tests
- `task clean` - Clean Python cache files
- `task update` - Update dependencies
- `task info` - Show project information
- `task dev-setup` - Install development tools
- `task dev` - Run development workflow
- `task build` - Build/validate the project
- `task watch` - Watch for changes and run export
- `task validate` - Validate all aspects of the project

## Quick Start

1. **Initial Setup:**
   ```bash
   task init
   ```

2. **Export Workload Data:**
   ```bash
   task export-workload
   ```

3. **Check Project Health:**
   ```bash
   task health-check
   ```

4. **Development Workflow (from root):**
   ```bash
   task scripts:dev-setup
   task scripts:dev
   ```

5. **Watch for Changes (from root):**
   ```bash
   task scripts:watch
   ```

6. **Or work directly in scripts directory:**
   ```bash
   cd scripts
   task dev-setup
   task watch
   ```

## File Structure

```
.
├── Taskfile.yml         # Global task definitions
├── scripts/
│   ├── Taskfile.yml     # Scripts-specific task definitions
│   ├── pyproject.toml   # Python project configuration
│   └── *.py             # Python scripts
└── docs/
    └── export/          # Generated export files
```

## Advanced Features

### Task Dependencies

Tasks can depend on other tasks:

```yaml
tasks:
  build:
    deps:
      - check
      - lint
    cmds:
      - echo "Building..."
```

### File Watching

Task supports file watching with sources and generates:

```yaml
tasks:
  export-workload:
    sources:
      - "{{.SOURCE_FILE}}"
      - export_workload_to_xlsx.py
    generates:
      - "{{.EXPORT_FILE}}"
    cmds:
      - uv run export-workload
```

### Variables and Templating

Use variables for configuration:

```yaml
vars:
  PROJECT_NAME: RH OVE Ecosystem
  SCRIPTS_DIR: scripts

tasks:
  info:
    cmds:
      - echo "Project: {{.PROJECT_NAME}}"
```

## Adding New Tasks

To add new tasks, edit the appropriate `Taskfile.yml`:

- Global tasks: Edit `./Taskfile.yml`
- Scripts tasks: Edit `./scripts/Taskfile.yml`

### Example Task

```yaml
tasks:
  my-task:
    desc: Description of what the task does
    deps:
      - other-task
    sources:
      - src/**/*.py
    generates:
      - dist/output.txt
    cmds:
      - echo "Running task..."
      - command-to-run
      - echo "Task complete!"
```

## Dependencies

- `task` - Go-based task runner
- `uv` - Python package manager (for scripts)
- `mkdocs` - Documentation generator (optional)
- `watchexec` - File watcher (optional, for `task watch`)
