import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: test formate currency',() => {
  it('convert cents into doller',()=>{
    expect(formatCurrency(2010)).toEqual('20.10');
  });
  it('working with 0',()=>{
    expect(formatCurrency(2000)).toEqual('20.00');
  });
  it('testing with decimal after 4 numbers',()=>{
    expect(formatCurrency(2000.1)).toEqual('20.00');
  });
  it('round to nearest cent',()=>{
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
  it('testing with negative numbers',()=>{
   expect(formatCurrency(-2000)).toEqual('-20.00')
  
  });
});