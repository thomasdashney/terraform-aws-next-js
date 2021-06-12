############
# CloudFront
############

variable "cloudfront_price_class" {
  type = string
}

variable "cloudfront_default_root_object" {
  type = string
}

variable "cloudfront_origins" {
  type    = list(any)
  default = null
}

variable "cloudfront_default_behavior" {
  type    = map(any)
  default = null
}

variable "cloudfront_custom_behaviors" {
  type    = list(any)
  default = null
}

##########
# Labeling
##########
variable "deployment_name" {
  type = string
}

variable "tags" {
  type    = map(string)
  default = {}
}