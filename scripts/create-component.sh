#!/bin/bash
# Creates boilerplate for React TypeScript Component

cd ./src/components
mkdir $1
cd $1
touch $1.tsx
touch index.ts
echo "import React from \"react\";" >> $1.tsx
echo "" >> $1.tsx
echo "function $1 () {" >> $1.tsx
echo "  return(" >> $1.tsx
echo "      <h1>$1</h1>" >> $1.tsx
echo "  );" >> $1.tsx
echo "}" >> $1.tsx
echo "" >> $1.tsx
echo "export default $1;" >> $1.tsx
echo "export * from \"./$1\";" >> index.ts
echo "export { default } from \"./$1\";" >> index.ts