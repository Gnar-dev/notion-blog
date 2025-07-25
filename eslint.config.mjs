import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import someConfig from 'some-other-config-you-use';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 1인 개발자가 효과적으로 Next.js 프로젝트를 개발할 수 있도록 하는 규칙을 추가합니다.
      // - 코드 일관성, 가독성, 유지보수성, 실수 방지에 중점을 둡니다.
      // - TypeScript, React, Next.js, Prettier와의 호환성을 고려합니다.

      // 타입스크립트 관련 규칙
      '@typescript-eslint/explicit-function-return-type': 'warn', // 함수 반환 타입 명시 권장
      '@typescript-eslint/no-explicit-any': 'warn', // any 사용 경고
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 사용하지 않는 변수 경고, _로 시작하면 무시

      // React/Next.js 관련 규칙
      'react/react-in-jsx-scope': 'off', // Next.js에서는 필요 없음
      'react/jsx-uses-react': 'off', // Next.js에서는 필요 없음
      'react/jsx-boolean-value': ['warn', 'never'], // 불리언 props는 명시적으로 true/false 사용
      'react/self-closing-comp': 'warn', // self-closing 가능한 태그는 self-closing 사용
      'react/prop-types': 'off', // TypeScript 사용 시 prop-types 불필요

      // 코드 스타일 및 가독성
      'prettier/prettier': 'warn', // Prettier 포맷팅 권장
      quotes: ['warn', 'single', { avoidEscape: true }], // 작은따옴표 권장
      semi: ['warn', 'always'], // 세미콜론 사용 권장
      'comma-dangle': ['warn', 'always-multiline'], // 멀티라인에서 trailing comma 권장
      'object-curly-spacing': ['warn', 'always'], // 객체 중괄호 띄어쓰기 권장

      // 잠재적 오류 방지
      eqeqeq: ['error', 'always'], // 항상 ===, !== 사용
      'no-duplicate-imports': 'error', // 중복 import 금지
      'no-var': 'error', // var 사용 금지, let/const 사용
      'prefer-const': 'warn', // 변경되지 않는 변수는 const 사용

      // 접근성(a11y) 관련 권장 규칙
      'jsx-a11y/alt-text': 'warn', // <img> alt 속성 필수
      'jsx-a11y/anchor-is-valid': 'warn', // 유효한 <a> 태그 사용
      // 여기에 추가적인 규칙을 설정할 수 있습니다
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  eslintConfigPrettier,
];

export default someConfig;
