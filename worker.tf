terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloud_api_2
  account_id = var.c_account
}


resource "cloudflare_worker_script" "remoote_worker" {
  name    = "my-remoote_worker"               # Name of the new Worker
  content = file("${path.module}/src/index.js")
}
