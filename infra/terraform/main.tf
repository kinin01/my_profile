resource "cloudflare_pages_project" "profile" {
  account_id        = var.cloudflare_account_id
  name              = var.project_name
  production_branch = "main"

  deployment_configs {
    preview {
      compatibility_date  = "2024-09-23"
      compatibility_flags = []
    }
    production {
      compatibility_date  = "2024-09-23"
      compatibility_flags = []
    }
  }
}
