# Image and content permissions log

This file records explicit permission grants for any third-party
image or content republished or mirrored on coachbook (the site, not
the source-citation registry — that lives in `sources/registry.md`).

It is a working log: every entry below corresponds to a documented
permission from a rights-holder authorizing the archive to display
or store an asset that would otherwise be linked-out.

## Default policy

The archive's default is to **link out, not mirror**. Catalog scans,
Pinterest boards, dealer photographs, museum images, and forum-
contributed photos remain at their hosts; the archive cites them by
URL with a snapshot anchor. Linking does not require permission.

Republishing or mirroring an asset on coachbook **does** require
explicit permission, captured here as an entry. See `STYLE.md` §6
(Image rules) and `PLAN.md` §"Source ethics" for the full policy.

## Format

Each grant is its own H3:

```
### <stable-id>
- granted-by: <name + role / organization>
- granted-on: YYYY-MM-DD
- scope: <what the grant covers — single asset, asset family, etc.>
- conditions: <attribution, link-back, geographic restrictions, etc.>
- contact: <email or other channel for follow-ups>
- record: <link or path to the original permission email / DM /
            license document>
- notes: <any additional context>
```

## Grants on file

*(none yet — this archive currently links out for every third-party
asset. Entries will be added here when the policy needs to be
extended for a specific case.)*

## Why this file exists

The registry (`sources/registry.md`) records what each source is and
its access status; it does NOT record who has granted republication
permission. Mixing the two would conflate "the URL is reachable" with
"we are licensed to mirror." This file is the permission ledger so
the distinction stays clean.

When you need to mirror an image:

1. Decide whether the use is a fair-use commentary excerpt (a small
   quotation that doesn't substitute for the original) or a
   reproduction. Fair-use commentary is documented in registry
   `rights: fair-use-commentary`; full reproductions need a grant
   here.
2. Contact the rights-holder. Document the grant with the format
   above.
3. Add the registry entry's stable ID as the H3, even if the entry
   already has `rights: brand` or similar — the permissions log is
   strictly about reproduction grants, not source classification.
4. Caption the asset with the source ID and (where required by the
   grant) the attribution string the grant prescribes.
