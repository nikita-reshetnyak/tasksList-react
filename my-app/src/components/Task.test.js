import { render } from '@testing-library/react';
import { screen,fireEvent } from '@testing-library/react';
import React from 'react';
import Task from './Task';

it('should call the completeTask handler ', () => {
    const onCompleteTask = jest.fn();
    render(<Task task completeTask={onCompleteTask} />);
    const addButton = screen.getByTestId('complete-task');
    fireEvent.click(addButton);
    expect(onCompleteTask).toHaveBeenCalled();
});