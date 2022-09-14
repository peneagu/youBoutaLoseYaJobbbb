const manager = require('../app');


describe('manager', () => {
    it('should be a function', () => {
        expect(typeof manager).toBe('manager');
    }),
    it('should be an instance of manager', () => {
        const employee = new manager();
        expect(employee instanceof manager).toBe(true);
    }),
    it('should have a manager property', () => {
        const employee = new manager();
        expect(employee.manager).toBeDefined();
    }),
    it('should have a engineer property', () => {
        const manager = new manager();
        expect(manager.engineer).toBeDefined();
    }),
    it('should have a intern property', () => {
        const manager = new manager();
        expect(manager.intern).toBeDefined();
    }),
    it('should have a start function', () => {
        const manager = new manager();
        expect(typeof manager.start).toBe('function');
    }),
    it('should have a enter function', () => {
        const manager = new manager();
        expect(typeof manager.enter).toBe('function');
    }),
    it('should have a quit function', () => {
        const manager = new manager();
        expect(typeof manager.quit).toBe('function');
    })
})