import { render, screen, cleanup, fireEvent } from "@testing-library/react-native";
import TapGesture from "./TapGesture.jsx";
// import '@testing-library/jest-native';
// import '@testing-library/jest-native/extend-expect';

afterEach(() => {
    cleanup();
});

describe('TapGesture Screen', () => {
    it('should render correctly', async () => {
        render(<TapGesture />);

        expect(screen.getByText('Tap Gesture Screen')).toBeOnTheScreen();
    });

    it('should have the correct initial background color', async () => {
        render(<TapGesture />);

        const box = screen.getByTestId('box');
        expect(box).toHaveStyle({ backgroundColor: '#91ffb4' });
    });
});