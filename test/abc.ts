import { expect } from 'chai';
import { unparseL3, parseL3, parseL3Exp } from '../L3/L3-ast';
import { lexTransform } from '../L3/LexicalTransformations';
import { makeOk, bind, isFailure } from '../shared/result';
import { parse as p } from "../shared/parser";



const v = bind(bind(p(`
(class (a b) 
((first (lambda () a)) 
(second (lambda () b)) 
(sum (lambda () (+ a b)))))`),parseL3Exp), x=>makeOk(unparseL3(x)))

console.log(v);