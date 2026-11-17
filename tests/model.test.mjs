import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as M from '../src/model.mjs';
const data=JSON.parse(readFileSync(new URL('../data/fixtures.json',import.meta.url),'utf8'));
test('unanswered is not complete',()=>assert.equal(M.assess(data,[]).complete,false));test('all correct answers complete the check',()=>{const r=M.assess(data,data.map(x=>x.correct));assert.equal(r.correct,3);assert.equal(r.complete,true);});test('completed does not mean all correct',()=>{const r=M.assess(data,[0,0,0]);assert.equal(r.complete,true);assert.equal(r.correct,0);});test('wrong answer receives specific feedback',()=>assert.ok(M.assess(data,[0]).results[0].feedback.includes('blocker')));
