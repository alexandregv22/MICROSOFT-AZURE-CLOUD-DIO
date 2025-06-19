docker build -t blog-alexandre-app:latest .

docker run -d -p 80:80 blog-alexandre-app:latest

az login

# Cria o resource group
az group create --name containerappslab03 --location eastus

# Cria Container Registry
az acr create --resource-group containerappslab03 --name blogalexandreacr --sku Basic

# Logi to ACR
az acr login --name blogalexandreacr

# Tag the image
docker tag blog-alexandre-app:latest blogalexandreacr.azurecr.io/blog-alexandre-app:latest

# Push the image to ACR
docker push blogalexandreacr.azurecr.io/blog-alexandre-app:latest

#containerID = blogalexandreacr.azurecr.io/blog-alexandre-app:latest
#user = blogalexandreacr

# Cria o Environment container app
az containerapp env create --name blog-alexandre-env --resource-group containerappslab03 --location eastus

# Cria o Container App
az containerapp create --name blog-alexandre-app --resource-group containerappslab03 --image blogalexandreacr.azurecr.io/blog-alexandre-app:latest --environment blog-alexandre-env --target-port 80 --ingress 'external' --registry-username blogalexandreacr --registry-server blogalexandreacr.azurecr.io