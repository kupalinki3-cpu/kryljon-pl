# Wejście: nix-shell
# Node 22 (testy używają node:sqlite) i steam-run, w którym startuje binarny workerd z wranglera.
{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  packages = [
    pkgs.nodejs_22
    pkgs.steam-run-free
  ];

  shellHook = ''
    echo "Głębia: node $(node -v)"
    echo "Testy:        npm test"
    echo "Dev (workerd): steam-run npm run dev"
  '';
}
