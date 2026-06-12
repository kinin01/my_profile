output "pages_url" {
  description = "Production URL."
  value       = "https://${cloudflare_pages_project.profile.name}.pages.dev"
}

output "project_name" {
  description = "Use this value for CF_PROJECT_NAME in deploy.yml."
  value       = cloudflare_pages_project.profile.name
}
