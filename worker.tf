terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "~> 5"
    }
  }
}
provider "cloudflare" {
  api_token = var.cloud_api_2
 
}
resource "cloudflare_workers_script" "my-hello-world-script" {
  account_id = var.c_account 
  script_name = "my-hello-world-script"
  content = file("${path.module}/src/index.js")
}