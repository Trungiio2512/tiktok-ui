import Portal from '~/components/Portal';

function Following() {
    return (
        <div>
            <h1>Following Page</h1>
            <Portal containerId="example-portal-btn">
                <button>Example portal</button>
            </Portal>
        </div>
    );
}

export default Following;
