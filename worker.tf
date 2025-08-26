provider "cloudflare" {
  api_token = var.cloudflare_api_2
}

resource "cloudflare_worker_script" "remoote_worker" {
  name    = "my-remoote_worker"               # Name of the new Worker
  content = file("${path.module}/src/index.js")
}
