terraform {
  required_version = ">= 1.0"

  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

provider "github" {
  owner = "sotanengel"
}

data "github_user" "owner" {
  username = "sotanengel"
}

resource "github_repository_ruleset" "protect_main" {
  name        = "protect-main"
  repository  = "sotanengel.github.io"
  target      = "branch"
  enforcement = "active"

  conditions {
    ref_name {
      include = ["refs/heads/main"]
      exclude = []
    }
  }

  bypass_actors {
    actor_id    = 5 # Repository Admin role
    actor_type  = "RepositoryRole"
    bypass_mode = "always"
  }

  rules {
    non_fast_forward = true
    deletion         = true
  }
}
