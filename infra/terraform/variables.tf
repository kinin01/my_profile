variable "cloudflare_api_token" {
  description = "Cloudflare API token with Pages:Edit permission."
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare Account ID."
  type        = string
}

variable "project_name" {
  description = "Pages project name — becomes <name>.pages.dev. Lowercase, hyphens only."
  type        = string
  default     = "my-profile"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.project_name))
    error_message = "project_name must contain only lowercase letters, numbers, and hyphens."
  }
}
