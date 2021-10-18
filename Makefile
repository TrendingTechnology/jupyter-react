# Copyright (c) Datalayer, Inc. https://datalayer.io
# Distributed under the terms of the MIT License.

SHELL=/bin/bash

CONDA=source $$(conda info --base)/etc/profile.d/conda.sh
CONDA_ACTIVATE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda activate ; conda activate
CONDA_DEACTIVATE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda deactivate
CONDA_REMOVE=source $$(conda info --base)/etc/profile.d/conda.sh ; conda remove -y --all -n

ENV_NAME=datalayer

.PHONY: help

all: clean install build

build: ## build all modules
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		yarn build )

clean: ## deletes node_modules, lib, build... folders and other generated info, lock, log... files
	find . -name node_modules | xargs rm -fr {} || true
	find . -name dist | xargs rm -fr {} || true
	find . -name lib | xargs rm -fr {} || true
	find . -name build | xargs rm -fr {} || true
	find . -name yarn.lock | xargs rm {} || true
	find . -name yarn-error.log | xargs rm {} || true
	find . -name tsconfig.tsbuildinfo | xargs rm {} || true

default: help ## default target is help

help: ## display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

env-rm: ## create a conda environment
	($(CONDA); \
		conda deactivate && \
			conda remove -y --all -n datalayer-jupyter )

env: ## create a conda environment
	($(CONDA); \
		conda env create -f environment.yml && \
		pip install --upgrade git+https://github.com/datalayer-externals/jupyter-server@multiuser-rbac#egg=jupyter_server && \
		pip install --upgrade git+https://github.com/datalayer/jupyterpool@main#egg=jupyterpool )

install: ## Install yarn dependencies and link the theme from the storybook
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		yarn && \
		rm -fr */node_modules/react && \
		rm -fr */node_modules/react-dom && \
		rm -fr */*/node_modules/react && \
		rm -fr */*/node_modules/react-dom )

publish: ## publish
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		rm -fr dist/* && \
		python setup.py sdist bdist_wheel && \
		twine upload dist/* )

example-build: ## build the storybook
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		rm -fr storybook/.out/* && \
		yarn build:vercel && \
		open example/.out/index.html )

example-deploy: ## deploy the storybook
	($(CONDA_ACTIVATE) ${ENV_NAME}; \
		npx vercel --prod )
