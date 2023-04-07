# yarn berry or pnpm 사용 시 Prisma Client를 찾을 수 없는 문제를 해결하기 위한 스크립트
# https://github.com/prisma/prisma/issues/10433#issuecomment-1346198205
# https://github.com/prisma/prisma/issues/2584#issuecomment-646414549
yarn prisma:generate
mkdir -p node_modules/.prisma/client
cp -r prisma/generated/ node_modules/.prisma/client/
