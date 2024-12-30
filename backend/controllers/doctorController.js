import doctorModel from '../models/doctorModel.js'

const changeAvailability = async (req, res) => {
    try {

        const { docId } = req.body;
        if (!docId) {
            return res.json({ success: false, message: 'Doctor ID is required' });
        }

        const doctorData = await doctorModel.findById(docId);

        if (!doctorData) {
            return res.json({ success: false, message: 'Doctor not found' });
        }

        const updatedDoctor = await doctorModel.findByIdAndUpdate(
            docId,
            { available: !doctorData.available },
            { new: true } // Returns the updated document
        );

        res.json({
            success: true,
            message: 'Availability changed successfully',
            doctor: updatedDoctor, // Include updated doctor data if needed
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export { changeAvailability };
