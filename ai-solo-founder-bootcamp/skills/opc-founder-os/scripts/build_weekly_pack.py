#!/usr/bin/env python3
import argparse
import hashlib
import json
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile

WEEK_SKILLS = {
    0: "opc-founder-fit",
    1: "opc-business-sot",
    2: "opc-agent-team",
    3: "opc-idea-validator",
    4: "opc-w4-offer-mvp",
    5: "opc-w5-brand-launch",
    6: "opc-w6-shipping-review",
    7: "opc-w7-first-dollar",
    8: "opc-w8-content-engine",
    9: "opc-w9-customer-acquisition",
    10: "opc-w10-seo-geo",
    11: "opc-w11-growth-experiment",
    12: "opc-w12-delivery-cfo",
    13: "opc-w13-australia-setup",
    14: "opc-w14-pitch-builder",
    15: "opc-w15-graduation-auditor",
}

WEEK_GUIDES = {
    0: "STUDENT_INSTALL_FOUNDER_FIT.md",
    1: "STUDENT_INSTALL.md",
    2: "STUDENT_INSTALL_AGENT_TEAM.md",
    3: "STUDENT_INSTALL_IDEA_VALIDATOR.md",
}

def add_tree(archive: ZipFile, root: Path, prefix: str) -> None:
    for path in sorted(root.rglob("*")):
        if path.is_file() and "__pycache__" not in path.parts:
            archive.write(path, Path(prefix) / path.relative_to(root))

def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--week", type=int, required=True, choices=range(0, 16))
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    skills_root = Path(__file__).resolve().parents[2]
    weekly = WEEK_SKILLS[args.week]
    args.output.mkdir(parents=True, exist_ok=True)
    archive_path = args.output / f"opc-week-{args.week:02d}-{weekly}.zip"

    with ZipFile(archive_path, "w", ZIP_DEFLATED) as archive:
        guide = WEEK_GUIDES.get(args.week)
        if guide:
            archive.write(skills_root / guide, "README-STUDENT.md")
        add_tree(archive, skills_root / "opc-founder-os", "opc-founder-os")
        add_tree(archive, skills_root / weekly, weekly)

    digest = hashlib.sha256(archive_path.read_bytes()).hexdigest()
    manifest = {
        "week": args.week,
        "skills": ["opc-founder-os", weekly],
        "archive": archive_path.name,
        "sha256": digest,
    }
    manifest_path = archive_path.with_suffix(".json")
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"archive": str(archive_path), "manifest": str(manifest_path), "sha256": digest}))
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
