# cidr-to-range (no-deps)

# usage
`cidrToRange(['149.154.160.0/20', '91.108.4.0/22'])`
return an array of `5,120` addresses

#### you can also add a non-subnet address there, it will also be added to the array
`cidrToRange(['149.154.160.0', '91.108.4.0/22'])`
returns `['149.154.160.0', ...and another 1,024 addresses]`
